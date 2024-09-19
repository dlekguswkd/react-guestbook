//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

//import 컴포넌트

//import css


const AddList = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (
        <>
            <table border="1" width="540px">
                <tr>
                    <td>이름</td><td><input id="" type="text" name="" value="" placeholder="" /></td>
                    <td>비밀번호</td><td><input id="" type="password" name="" value="" placeholder="" /></td>
                </tr>
                <tr>
                    <td colSpan="4"><textarea cols="72" rows="5"></textarea></td>
                </tr>
                <tr>
                    <td colSpan="4"><button type="button">등록</button></td>
                </tr>
            </table>
            <br />

            <table border="1" width="540px">
                <tr>
                    <td>[1]</td>
                    <td>이효리</td>
                    <td>2022-01-01</td>
                    <td>
                        <Link to="" rel="noreferrer noopener">
                            삭제
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td colSpan="4">방문하고 갑니다.</td>
                </tr>
            </table>
            <br />
	
            <table border="1" width="540px">
                <tr>
                    <td>[1]</td>
                    <td>이효리</td>
                    <td>2022-01-01</td>
                    <td>
                        <Link to="" rel="noreferrer noopener">
                            삭제
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td colSpan="4">방문하고 갑니다.</td>
                </tr>
            </table>
            <br />

            <table border="1" width="540px">
                <tr>
                    <td>[1]</td>
                    <td>이효리</td>
                    <td>2022-01-01</td>
                    <td>
                        <Link to="" rel="noreferrer noopener">
                            삭제
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td colSpan="4">방문하고 갑니다.</td>
                </tr>
            </table>
            <br />
        </>
    );
}

export default AddList;