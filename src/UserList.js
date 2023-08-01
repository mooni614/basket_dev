
function User({user}){
    return (
        <div>
            <b>{user.username}</b> <br/>
            <b>{user.email}</b> 
        </div>

    );

}

function UserList(){
    
const users = [
    {
        id : 1,
        username:"mi",
        email:"mi@gmail.com"
    },
    {
        id : 2,
        username:"yo",
        email:"yo@kh.com"
    },
    {
        id : 3,
        username:"wow",
        email:"wow@han.com"
    }

]; // 배열 배열데이터는 대괄호 - 중괄호로 닫아준다 (개발자 규칙)

return( // 컴포넌트를 만들어서 간결하게 결과값 나오게 하기
    <div> 
        <div>
            <User user={users[1]} />
            <User user={users[2]} />
            <User user={users[0]} />
        </div>

    </div>

);

}


export default UserList;