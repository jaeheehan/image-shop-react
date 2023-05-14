import React from "react";
import MainLayout from "../../layout/MainLayout";
import { useParams } from "react-router-dom";

function CodeGroupModifyPage() {

    const { groupCode } : {groupCode: string} = useParams();

    return (
        <MainLayout>

        </MainLayout>
    )
}

export default CodeGroupModifyPage;