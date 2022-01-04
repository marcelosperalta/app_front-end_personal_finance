import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function TransactionsTable(){
    const { transactions } = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>
                                {transaction.description}
                            </td>

                            <td className={transaction.type}>
                                {new Intl.NumberFormat("de", {
                                    style: "currency",
                                    currency: "EUR"
                                }).format(transaction.amount)}
                            </td>

                            <td>
                                {transaction.category}
                            </td>

                            <td>
                                {new Intl.DateTimeFormat("de").format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}