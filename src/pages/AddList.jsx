//import 라이브러리
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//import 컴포넌트

//import css


const AddList = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [guestList, setGuestList] = useState([]);

	/*---일반 메소드 -----------------------------------------*/
    const getGuestList = ()=> {

        // 서버로 데이터 전송
        axios({
            method: 'get',  // put, post, delete
            url: 'http://localhost:9000/api/persons',

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            // setGuestList(response.data);

        }).catch(error => {
            console.log(error);
        });
    };

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    useEffect(()=>{
        console.log("마운트 됐어요");
        
        // 서버에서 데이터 가져오기 그리기
        getGuestList();

    }, []);




    return (
        <>
            <form action="" method="">
                <table border="1" width="540px">
                    <tr>
                        <td>이름</td><td><input id="" type="text" name="" value="" placeholder="" /></td>
                        <td>비밀번호</td><td><input id="" type="password" name="" value="" placeholder="" /></td>
                    </tr>
                    <tr>
                        <td colSpan="4"><textarea cols="72" rows="5"></textarea></td>
                    </tr>
                    <tr>
                        <td colSpan="4"><button type="submit">등록</button></td>
                    </tr>
                </table>
            </form>
            <br />

            <div>
                <table border="1" width="540px">
                    <tr>
                        <td>[1]</td>
                        <td>이효리</td>
                        <td>2022-01-01</td>
                        <td>
                            <Link to="/deleteform" rel="noreferrer noopener">
                                삭제
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4">방문하고 갑니다.</td>
                    </tr>
                </table>
                <br />
            </div>
	
        </>
    );
}

export default AddList;