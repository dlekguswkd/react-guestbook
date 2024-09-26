//import 라이브러리
import React, { useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

//import 컴포넌트

//import css


const DeleteForm = () => {

    const {no} = useParams();
    const navigate = useNavigate();

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [pw, setPw] = useState('');

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
        // 패스워드
        const handelPw = (e) => {
            setPw(e.target.value);
        }
    
        const handleDel = (e) => {
            e.preventDefault();
    
            let guestVo = {
                password: pw
            }
            console.log(guestVo);
    
            axios({
                method: 'delete',
                url: `http://localhost:9000/api/guests/${no}`,
    
                headers: { "Content-Type": "application/json; charset=utf-8" },
                data: guestVo,
    
                responseType: 'json'
            }).then(response => {
                console.log(response);
                if(response.data.result === 'success'){
                    navigate('/addlist');
                }else{
                    alert('비밀번호가 일치하지 않습니다.');
                }
            });
    
        }

    return (
        <>
            <form action="" method="" onSubmit={handleDel}>
                <table>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="text" name="password" value={pw} onChange={handelPw} /></td>
                        <td><button type="submit">삭제</button></td>
                    </tr>
                </table>    
                {/* <input type="hidden" name="no" value=""/> */}
            </form>

            <br /><br />
            <Link to="/addlist" rel="noreferrer noopener">
                메인으로 돌아가기
            </Link>
        </>
    );
}

export default DeleteForm;