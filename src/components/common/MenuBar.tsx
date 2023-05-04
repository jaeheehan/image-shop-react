import React from "react";
import { Link } from "react-router-dom"
import styles from "../../Shop.module.css"

function MenuBar() {
    return (
        <div className={styles.centered}>
            <table>
                <body>
                    <tr>
                        <td width="120"><Link to="/">홈</Link></td>
                    </tr>
                </body>
            </table>
        </div>
    )
}

export default MenuBar;