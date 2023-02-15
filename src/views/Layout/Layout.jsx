import { AppBar } from "components/AppBar/AppBar";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppWrapper, FooterBlock, FooterLink, FooterWrapper, MainBlock } from "./Layout.styled";

const Layout = () => {

    return (
        <AppWrapper>
            <AppBar />
            <Suspense fallback={<Loader />}>
                <MainBlock>
                    <Outlet />
                </MainBlock>
            </Suspense>
            <FooterBlock>
                <FooterWrapper>

                <FooterLink href="https://github.com/allonsg">ALLONS_G</FooterLink>
                </FooterWrapper>
            </FooterBlock>
        </AppWrapper>
    )
};

export default Layout;