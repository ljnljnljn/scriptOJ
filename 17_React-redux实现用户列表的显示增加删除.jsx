const ADD_USER = "ADD_USER"
const DELETE_USER = "DELETE_USER"
const UPDATE_USER = "UPDATE_USER"

const userReducer = (state = [], action) => {
  switch(action.type) {
    case(ADD_USER):
      return [...state. action.user]
    case(DELETE_USER):
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case(UPDATE_USER): {
        let upState = [...state];
        upState[action.index] = {...upState[action.index], ...action.user};
        return [...upState];
    }
    default:
        return state
  }
}

class User extends Component {
    delete() {
        if(this.props.deleteUser) {
            this.props.deleteUser(this.props.index)
        }
    }
    render () {
        const { user } = this.props
        return (
        <div>
            <div>Name: {user.username}</div>
            <div>Age: {user.age}</div>
            <div>Gender: {user.gender}</div>
            <button onClick={this.delete.bind(this)}>删除</button>
        </div>
    )
  }
}

class UsersList extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            age: 0,
            gender: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(e) {
        switch(e.target.type) {
            case 'text':
                this.setState({
                    username: e.target.value
                })
                break;
            case 'number':
                this.setState({
                    age: Number(e.target.value)
                })
                break;
            case 'radio': 
                this.setState({
                    gender: e.target.value
                })
                break;
            default:
                break;
        }
    }
    handleAddUser() {
        if(this.props.addUser) {
            this.props.addUser(this.state)
        }
    }
    render () {
        const {users} = this.props
        return (
            <div>
                {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
                <div className='add-user'>
                <div>Username: <input type='text' value={this.state.username} onChange={this.handleInputChange}/></div>
                <div>Age: <input type='number' value={this.state.age} onChange={this.handleInputChange}/></div>
                <div>Gender:
                    <label>Male: <input type='radio' name='gender' value='male' onChange={this.handleInputChange}/></label>
                    <label>Female: <input type='radio' name='gender' value='female' onChange={this.handleInputChange}/></label>
                </div>
                <button onClick={this.handleAddUser.bind(this)}>增加</button>
                </div>
                {/* 显示用户列表 */}
                <div className='users-list'>
                    <div className='user-list'>
                        {users.map((item, index) => {
                            return <User user={item} key={index} index={index} deleteUser={this.props.deleteUser}></User>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch({type: ADD_USER, user})
        },
        deleteUser: (index) => {
            dispatch({type:DELETE_USER, index})
        }
    }
}
UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList)