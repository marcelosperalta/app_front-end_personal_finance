import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';
import balanceImg from '../../assets/balance.svg';

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.balance += transaction.amount;
        } else {
            acc.withdrawals += transaction.amount;
            acc.balance -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdrawals: 0,
        balance: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="Incomes" />
                </header>
                
                <strong>
                    {new Intl.NumberFormat("de", {
                        style: "currency",
                        currency: "EUR"
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Expenses</p>
                    <img src={expenseImg} alt="Expenses" />
                </header>

                <strong>
                    -
                    {new Intl.NumberFormat("de", {
                            style: "currency",
                            currency: "EUR"
                    }).format(summary.withdrawals)}
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Balance</p>
                    <img src={balanceImg} alt="Balance" />
                </header>

                <strong>
                    {new Intl.NumberFormat("de", {
                            style: "currency",
                            currency: "EUR"
                    }).format(summary.balance)}
                </strong>
            </div>
        </Container>
    )
}