## 스프레드 문법

```js
const initialState = { count: 0 };

const newState = { ...initialState, count: initialState.count + 1 };
console.log(newState); // { count: 1 }
```

## 구조 분해 할당 문법

```jsx
// 부모 컴포넌트
const ParentComponent = () => {
    const userData = { username: 'john', email: 'john@example.com', isAdmin: true };

    return (
        <div>
            <UserInfo userData={userData} />
        </div>
    );
};

// 자식 컴포넌트
const UserInfo = ({ userData }) => {
    const { username } = userData;

    return (
        <div>
            <p>Username: {username}</p>
        </div>
    );
};
```

## Rest 문법

```jsx
// 부모 컴포넌트
const ParentComponent = () => {
    const userData = { username: 'john', email: 'john@example.com', isAdmin: true };

    return (
        <div>
            <UserInfo userData={userData} />
        </div>
    );
};

// 자식 컴포넌트
const UserInfo = ({ userData, ...rest }) => {
    const { username } = userData;

    return (
        <div>
            <p>Username: {username}</p>
            {/* 나머지 속성들을 출력 */}
            <p>Other Data: {JSON.stringify(rest)}</p>
        </div>
    );
};
```
