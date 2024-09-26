//import 라이브러리
import React, {useEffect, useState} from 'react';
import axios from 'axios';

//import 컴포넌트
import ItemGuest from './ItemGuest';

//import css


const AddList = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    const [content, setContent] = useState('');
    const [guestList, setGuestList] = useState([]);

	/*---일반 메소드 -----------------------------------------*/
    const getGuestList = ()=> {

        // 서버로 데이터 전송
        axios({
            method: 'get',  // put, post, delete
            url: 'http://localhost:9000/api/guests',

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            setGuestList(response.data.apiData);

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

    // 이름
    const handleName = (e) => {
        setName(e.target.value);
    }

    // 패스워드
    const handlePw = (e) => {
        setPw(e.target.value);
    }
    
    // 내용 입력
    const handleContent = (e) => {
        setContent(e.target.value);
    }
    
    // 등록 버튼
    const handleAdd = (e) => {
        e.preventDefault();

        const guestVo = {
            name: name,
            password: pw,
            content: content
        }
        console.log(guestVo);

        axios({
            method: 'post', 			// put, post, delete                   
            url: 'http://localhost:9000/api/guests',
            headers: { "Content-Type": "application/json; charset=utf-8" },
            data: guestVo,
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            if(response.data.result === 'success') {
                // 성공로직
                getGuestList();
                
            }else {
                // 실패로직
                alert(response.data.message);
            }
        
        }).catch(error => {
            console.log(error);
        });
    }


    return (
        <>
            <form action="" method="" onSubmit={handleAdd}>
                <table border="1" width="540px">
                    <tr>
                        <td>이름</td><td><input id="" type="text" name="name" value={name} onChange={handleName} placeholder="" /></td>
                        <td>비밀번호</td><td><input id="" type="password" name="password" value={pw} onChange={handlePw} placeholder="" /></td>
                    </tr>
                    <tr>
                        <td colSpan="4"><textarea cols="72" rows="5" value={content} onChange={handleContent}></textarea></td>
                    </tr>
                    <tr>
                        <td colSpan="4"><button type="submit">등록</button></td>
                    </tr>
                </table>
            </form>
            <br />
        
            {guestList.map((guestVo) => {
                return (
                <div>
                    <ItemGuest guest={guestVo} 
                                key={guestVo.no}/>
                </div>
                )
            })}
	
        </>
    );
}

export default AddList;