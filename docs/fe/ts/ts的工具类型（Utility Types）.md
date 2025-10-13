# ts的工具类型（Utility Types）

TypeScript 提供了许多实用的工具类型（Utility Types），用于简化类型转换和操作。以下是一些常用的工具类型及其用途：


### 1. `Partial<T>`
- **作用**：将类型 `T` 的所有属性变为可选（与 `Required` 相反）。
- **示例**：
  ```typescript
  interface User {
    name: string;
    age: number;
  }
  
  type PartialUser = Partial<User>;
  // 等价于：{ name?: string; age?: number }
  ```
- **场景**：常用于更新对象时，只需提供部分属性（如补丁更新）。


### 2. `Readonly<T>`
- **作用**：将类型 `T` 的所有属性变为只读（不可修改）。
- **示例**：
  ```typescript
  type ReadonlyUser = Readonly<User>;
  // 等价于：{ readonly name: string; readonly age: number }
  
  const user: ReadonlyUser = { name: "Alice", age: 30 };
  user.age = 31; // 报错：属性为只读
  ```
- **场景**：保护对象不被意外修改（如常量配置）。


### 3. `Record<K, T>`
- **作用**：创建一个键类型为 `K`、值类型为 `T` 的对象类型。
- **示例**：
  ```typescript
  type StringMap = Record<string, number>;
  // 等价于：{ [key: string]: number }
  
  type UserRole = Record<'admin' | 'user', { permissions: string[] }>;
  // 等价于：{ admin: { permissions: string[] }; user: { permissions: string[] } }
  ```
- **场景**：定义具有固定键或特定键值关系的对象（如映射表）。


### 4. `Pick<T, K>`
- **作用**：从类型 `T` 中**选取**指定的属性 `K`（`K` 必须是 `T` 的属性键）。
- **示例**：
  ```typescript
  interface User {
    name: string;
    age: number;
    email: string;
  }
  
  type UserNameAndAge = Pick<User, 'name' | 'age'>;
  // 等价于：{ name: string; age: number }
  ```
- **场景**：提取对象的部分属性组成新类型。


### 5. `Omit<T, K>`
- **作用**：从类型 `T` 中**排除**指定的属性 `K`（与 `Pick` 相反）。
- **示例**：
  ```typescript
  type UserWithoutEmail = Omit<User, 'email'>;
  // 等价于：{ name: string; age: number }
  ```
- **场景**：排除对象中不需要的属性。


### 6. `Exclude<T, U>`
- **作用**：从联合类型 `T` 中**排除**可分配给类型 `U` 的成员。
- **示例**：
  ```typescript
  type T = 'a' | 'b' | 'c';
  type U = 'a' | 'd';
  
  type Excluded = Exclude<T, U>; // 结果：'b' | 'c'（排除了 T 中与 U 重叠的 'a'）
  ```
- **场景**：过滤联合类型中的特定成员。


### 7. `Extract<T, U>`
- **作用**：从联合类型 `T` 中**提取**可分配给类型 `U` 的成员（与 `Exclude` 相反）。
- **示例**：
  ```typescript
  type Extracted = Extract<T, U>; // 结果：'a'（提取 T 和 U 的交集）
  ```
- **场景**：获取联合类型中的共有成员。


### 8. `ReturnType<T>`
- **作用**：提取函数 `T` 的返回值类型。
- **示例**：
  ```typescript
  function getUser() {
    return { name: "Alice", age: 30 };
  }
  
  type UserReturnType = ReturnType<typeof getUser>;
  // 等价于：{ name: string; age: number }
  ```
- **场景**：获取函数返回值的类型（避免手动重复定义）。


### 9. `Parameters<T>`
- **作用**：提取函数 `T` 的参数类型，返回一个元组类型。
- **示例**：
  ```typescript
  function greet(name: string, age: number) {
    return `Hello, ${name}, age ${age}`;
  }
  
  type GreetParams = Parameters<typeof greet>; // 结果：[string, number]
  ```
- **场景**：获取函数参数的类型（如用于回调函数参数匹配）。


### 10. `NonNullable<T>`
- **作用**：从类型 `T` 中排除 `null` 和 `undefined`。
- **示例**：
  ```typescript
  type T = string | number | null | undefined;
  type NonNull = NonNullable<T>; // 结果：string | number
  ```
- **场景**：确保类型不包含 `null` 或 `undefined`（如处理可能为 null 的值）。


这些工具类型可以单独使用，也可以组合使用（例如 `Partial<Pick<T, K>>`），极大地简化了复杂类型的定义和转换。TypeScript 官方文档中还有更多工具类型，可根据具体场景选择使用。