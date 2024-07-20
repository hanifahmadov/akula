/* eslint-disable */
import styled from "styled-components";
import { clr, ff } from "../../shared/stores/design";

//: ${(props) => console.log(props)}

export const AccountContainer = styled.div`
	${({ theme, $displayNavbarAccount }) =>
		`   

        position: relative;
    
        border: 3px solid ${
			$displayNavbarAccount ? "rgba(255, 255, 255, 1)" : clr.rgba.wht02
		};
        
        transition: all 0.35s ease-in-out;

        border-radius: 10px;
        padding: 2px;

        
        transform: scale(0.9);
    
    
        .account-img {
            cursor: pointer;
            border-radius: 5px;
            overflow: hidden;
    
            img {
                width: 3rem;
                height:  3rem;
                border-radius: 5px;
                cursor: pointer;
                pointer-events: none;
                transition: all .25s ease-in-out;
            }
    
        }
    
        .account-dropdown {
            width: 10rem;
            position: absolute;
            left: 80px;
            bottom: -5px;
            padding-bottom: 8px;
            border: 3px solid white;
            border-radius: 10px;

            z-index: 1000;
        
            // background-color: ${clr.dark};
            // background: ${clr.rgba.wht02};
            // background: #112653;
            // background: #020816;
            

            color: white;
            background: black;

            .account-dropdown-links {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
    
                padding: .5rem 0rem 0rem 0rem;

               

                font-size: 0.9rem;

                .account-dropdown-links-img {

                    
                      pointer-events: none;
                      display: block;
                      margin: .5rem 0rem;




                    background: ${clr.rgba.wht01};
                    border-radius: 5px;

                   
                   

                    img {
                        width: 6rem;
                        height: 6rem;
                        border-radius: 5px;
                        pointer-events: none;
                        display: inline-block;
                        box-shadow: rgba(0, 0, 0, 1) 0px 0px .5px .5px;
                    }

                }

                .username {
                    display: inline-block;
                    background: rgba(255, 255, 255, .5);
                    color: black;
                    font-weight: 700;
                    width: 60%;
                    padding: 5px;
                    margin: 5px 0;
                    text-align: center;
                    border-radius: 2px;
                    font-size: .8rem;
                    font-family: ${ff.opensans};
                    letter-spacing: .5px;
                }
    
    
                div {

                    pointer-events: none;   
                    border-radius: 5px;

                    a {
                        display: inline-block;
                        width: 100%;
                        font-family: ${ff.opensans};
                        letter-spacing: .5px;
                        // font-weight: 900;
                        text-decoration: none;
                        color: ${clr.white03}; 
                        pointer-events: auto;
                        padding: .3rem .4rem;  

                        border: 2px solid black; 
                        border-radius: 5px;
                        font-size: .8rem;
                    }

                    width: 60%;
                    text-align: center;
                    margin: .5rem 0rem;
                    border-radius: 5px;
                    

                    

                    font-weight: 700;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all .1s ease-in-out;
                    background: ${clr.rgba.wht01};

                 
                    cursor: pointer;



                    &:hover {
                        background: ${clr.atag2};
                        transition: background .35s ease-in-out;
                    }

                    &:active {
                        transform: scale(0.975);
                    }

                }
            }

            &:before {
                content:"";
                position: absolute;
                left: -22px;
                bottom: 15px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px 10px 10px 10px;
                border-color: transparent white transparent transparent;
                z-index:9998;
            }

            &:after {
                content:"";
                position: absolute;
                left: -17px;
                bottom: 15px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px 10px 10px 10px;
                border-color: transparent black transparent transparent;
                z-index:9998;
            }
        }
        
        `}
`;
