import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Personal Finance" />
                
                <button 
                    type="button" 
                    onClick={onOpenNewTransactionModal}
                >
                    Add amount
                </button>
            </Content>
        </Container>
    )
}