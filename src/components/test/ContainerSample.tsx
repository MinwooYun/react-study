import React from "react";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props;

  return (
    <div style={{ background: "blue" }}>
      <span>{title}</span>

      <div>{children}</div>
    </div>
  );
};

const Parent = (): JSX.Element => {
  return (
    <Container title="Hello">
      <p>이 부분이 배경색으로 둘러싸여 있습니다.</p>
      <h2>test입니다</h2>
    </Container>
  );
};

export default Parent;
