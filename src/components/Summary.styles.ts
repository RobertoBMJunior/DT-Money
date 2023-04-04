import styled, { css } from "styled-components";

export const SummaryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    padding: 0 10rem;

    margin-top: -82px;
`

interface PictureContainerProps {
    variantIcon: 'green' | 'red' | 'white'
    variantBackground?: 'green' | 'gray'
}

export const PictureContainer = styled.div<PictureContainerProps>`

    ${(props) =>
    props.variantBackground === 'green' &&
    css`
      background-color: ${props.theme['green-dark']};
    `}

    ${(props) =>
    props.variantBackground !== 'green' &&
    css`
      background-color: ${props.theme['gray-4']};
    `}

    padding: 24px 24px 24px 32px;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    header{
        display: flex;
        justify-content: space-between;

        svg{
            ${(props) =>
                props.variantIcon === 'green' &&
                css`
                color: ${props.theme['green-light']};
            `
            }

            ${(props) =>
                props.variantIcon === 'red' &&
                css`
                color: ${props.theme['red']};
            `
            }

            ${(props) =>
                props.variantIcon === 'white' &&
                css`
                color: ${props.theme.white};
            `
            }


        }
    }

    .value{
        font-size: 2rem;
        font-weight: 700;
        color: ${props => props.theme['gray-7']}
    }



`