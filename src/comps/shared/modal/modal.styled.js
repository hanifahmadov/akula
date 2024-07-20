/* eslint-disable */
import styled from "styled-components";

export const ModalContainer = styled.div`

    height: 30rem;
    width: 28rem;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(14px);

    display: flex;
    position: absolute;
    z-index: 10;

    padding: 1rem 4rem;
    border-radius: 15px;

    .closeBtn {
        position: absolute;
        top: 5px;
        right: 5px;

        display: inline-block;
        padding: 0px 6px;
        padding-top: 1px;
        font-size: 1.4rem;

        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        cursor: pointer;
        font-weight: 800;
        font-size: 1.3rem;
        transition: all .25s ease-in-out;

        &:hover {
            background: rgba(255, 255, 255, 0.4);
            color: tomato;
        }
    }


    .change_password {
        // background: red;
    }

`