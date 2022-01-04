import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { useTransactions } from "../../hooks/useTransactions";

import { Container, TransactionTypeContainer, RadioBox } from "../NewTransactionModal/styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import expenseImg from "../../assets/expense.svg";

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    const { createTransaction } = useTransactions();

    const [description, setDescription] = useState('');
    const [amount, setAmount]           = useState(0);
    const [category, setCategory]       = useState('');
    const [type, setType]               = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            description,
            amount,
            category,
            type,
        });

        setDescription('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

        <button 
            type="button" 
            onClick={onRequestClose}
            className="react-modal-close"
        >
            <img src={closeImg} alt="Close" />
        </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Add amount</h2>

                <input 
                    placeholder="Description" 
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />

                <input 
                    type="number"
                    placeholder="Amount" 
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    {/* https://styled-components.com/docs/basics#styling-any-component */}
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Income" />
                        <span>Income</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={expenseImg} alt="Expense" />
                        <span>Expense</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    placeholder="Category" 
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Register
                </button>
            </Container>
        </Modal>
    );
}