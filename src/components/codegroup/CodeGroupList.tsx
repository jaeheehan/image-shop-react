import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css"
import { CodeGroup } from "../../App"

interface Props {
    readonly codeGroups: CodeGroup[];
    readonly isLoading: boolean;
}

function CodeGroupList({ codeGroups, isLoading}:Props) {
    return (
        <div className={styles.centered}>
            <h2>코드그룹목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeGroups && (
                <>
                    <Link to="/codegroup/create">새로만들기</Link>
                    <table className={styles.shop_table}>
                        <thead>
                            <tr>
                                <th align="center" className={styles.w_160}>코드그룹코드</th>
                                <th align="center" className={styles.w_160}>코드그룹명</th>
                                <th align="center" className={styles.w_180}>등록일시</th>
                            </tr>
                        </thead>
                        <tbody>
                        {!codeGroups.length && (
                            <tr>
                                <td colSpan={3}>
                                    List is empty.
                                </td>
                            </tr>
                        )}
                        {!!codeGroups.length && codeGroups.map((codeGroup)=> (
                            <tr key={codeGroup.groupCode}>
                                <td align="center">{codeGroup.groupCode}</td>
                                <td align="left">
                                    <Link to={`/codegroup/read/${codeGroup.groupCode}`}>
                                        {codeGroup.groupName}
                                    </Link>
                                </td>
                                <td align="center">{codeGroup.regDate}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default CodeGroupList;