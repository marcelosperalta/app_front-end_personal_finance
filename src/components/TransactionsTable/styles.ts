import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }

    @media (max-width: 600px) {
        margin-top: 2rem;

        table {
            thead {
                display: none;
            }

            tbody {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 1rem;

                td {
                    padding: .5rem 2rem;
                }

                td:first-child {
                    grid-area: description;

                    font-weight: bold;
                }
                td.deposit,
                td.withdraw  {
                    grid-area: deposit;

                    padding: 0 0 .5rem 2rem;

                    font-size: 1.5rem;
                }
                td.category {
                    grid-area: category;
                }
                td.date {
                    grid-area: date;
                }

                tr {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto;
                    grid-template-areas:
                        "description description"
                        "deposit deposit"
                        "category date";
                }
            }
        }

    }
`