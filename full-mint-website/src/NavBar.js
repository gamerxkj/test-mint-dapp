import React from "react";
import { Flex, Image, Link } from '@chakra-ui/react'
import Facebook from "./assets/social-media-icons/facebook_32x32.png"
import Twitter from "./assets/social-media-icons/twitter_32x32.png"
import Email from "./assets/social-media-icons/email_32x32.png"

import UAuth from '@uauth/js'


const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })

            setAccounts(accounts);
            console.log("buruh its connected")
        }
    }

    async function connectViaUDS() {

        console.log("button clicked")

        try {
            
          const authorization = await uauth.loginWithPopup()
          console.log(authorization)
        } catch (error) {
          console.error(error)
        }
    }

    const uauth = new UAuth({
        clientID: '9903f4a9-de57-47fb-9b5d-c45cee6df6ce',
        redirectUri: 'http://127.0.0.1',
    })
    

    return (
        <Flex justify="space-between" align="center" padding="30px 30px">
            {}
            <Flex justify="space-between" width="40%" padding="0 75px">
                <Link href="https://facebook.com">
                    <Image src={Facebook} boxSize="42px" margin="0 15px"/>
                </Link>

                <Link href="https://twitter.com">
                    <Image src={Twitter} boxSize="42px" margin="0 15px"/>
                </Link>

                <Link href="https://gmail.com">
                    <Image src={Email} boxSize="42px" margin="0 15px"/>
                </Link>

            </Flex>


            {}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {}

            <button onClick={connectViaUDS}>Login2</button>

            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button onClick={connectAccount}>Connect</button>
            )}

            

        </Flex>
    )

}

export default NavBar;
