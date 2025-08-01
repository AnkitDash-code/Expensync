import { useState, useEffect } from "react";
import api from "@/services/api";
import { useRouter } from "next/router";
import { isAuthenticated, hasRole } from "@/services/auth";

interface Expense {
  id: string;
  amount: number;
  currency: string;
  transaction_date: string;
  vendor_name: string;
  category: string;
  description: string;
  document_url: string;
  status: string;
  user_email: string; // Added for admin reports
}

export default function AdminReportsTestPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated() || !hasRole("admin")) {
      router.push("/login");
      return;
    }

    const fetchAdminReports = async () => {
      try {
        setLoading(true);
        const data = await api.getAdminReports();
        setExpenses(data);
      } catch (err: any) {
        console.error("Failed to fetch admin reports:", err);
        setError(err.message || "Failed to load admin reports.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdminReports();
  }, [router]);

  if (loading)
    return (
      <div className="container mx-auto p-4">Loading admin reports...</div>
    );
  if (error)
    return (
      <div className="container mx-auto p-4 text-red-600">Error: {error}</div>
    );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Expense Reports (Admin)</h1>
      {expenses.length === 0 ? (
        <p>No expenses found for admin reports.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">User Email</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Vendor</th>
                <th className="py-2 px-4 text-left">Description</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr
                  key={expense.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-2 px-4">{expense.id}</td>
                  <td className="py-2 px-4">{expense.user_email}</td>
                  <td className="py-2 px-4">
                    {new Date(expense.transaction_date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4">
                    {expense.amount.toFixed(2)} {expense.currency}
                  </td>
                  <td className="py-2 px-4">{expense.category}</td>
                  <td className="py-2 px-4">{expense.vendor_name}</td>
                  <td className="py-2 px-4">{expense.description}</td>
                  <td className="py-2 px-4">{expense.status}</td>
                  <td className="py-2 px-4">
                    {expense.document_url && (
                      <a
                        href={expense.document_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
