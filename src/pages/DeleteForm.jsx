//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

//import 컴포넌트

//import css


const DeleteForm = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

    /*---일반 메소드 --------------------------------------------*/



    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (
        <>
            <table>
                <tr>
                    <td>비밀번호</td>
                    <td><input id="" type="password" name="" value="" placeholder="" /></td>
                    <td><button type="submit">삭제</button></td>
                </tr>
            </table>

            <br /><br />
            <Link to="http://localhost:3000/addlist" rel="noreferrer noopener">
                메인으로 돌아가기
            </Link>
        </>
    );
}

export default DeleteForm;