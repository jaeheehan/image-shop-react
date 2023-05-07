import React from "react";
import SignInForm from "../../components/auth/SignInForm";
import SignLayout from "../../layout/SignLayout";
import SignInContainer from "../../containers/auth/SignInContainer";

function SignInPage() {
    return (
        <SignLayout>
            <SignInContainer/>
        </SignLayout>
    )
}

export default SignInPage;