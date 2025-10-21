import Image from "next/image";

type WelcomeProps = {
  name: string;
  age?: number;
  phone?: string;
};

const users: Array<WelcomeProps> = [
  { name: "Adeyemi", age: 27 },
  { name: "Farhan", age: 38 },
  { name: "Richmond Hill", age: 0 },
  { name: "Tim horton" },
];

function WelcomeV0(props: WelcomeProps) {
  const name = props.name;
  const age = props.age;

  return (
    <div className="bg-green-900 p-2 mb-4">
      <h2>Welcome, {name}</h2>
      {age ? <h2>I am {age} years old</h2> : null}
    </div>
  );
}

function WelcomeV1(props: WelcomeProps) {
  return (
    <div className="bg-green-900 p-2 mb-4">
      <h2>Welcome, {props.name}</h2>
      {props.age ? <h2>I am {props.age} years old</h2> : null}
    </div>
  );
}

function WelcomeV2(props: WelcomeProps) {
  // desctrcutring
  const { name, age } = props;

  return (
    <div className="bg-green-900 p-2 mb-4">
      <h2>Welcome, {name}</h2>
      {age ? <h2>I am {age} years old</h2> : null}
    </div>
  );
}

function WelcomeV3({ name, age, phone }: WelcomeProps) {
  return (
    <div className="bg-green-900 p-2 mb-4">
      <h2>Welcome, {name}</h2>
      {age ? <h2>I am {age} years old</h2> : null}
    </div>
  );
}

function Home() {
  return (
    <div className="flex-1 h-screen bg-blue-500 justify-items-center content-center">
      {users
        .filter((user) => {
          return user.age && user.age % 2 == 0;
        })
        .map((user) => {
          return <WelcomeV3 {...user} />;
        })}
    </div>
  );
}

export default Home;
