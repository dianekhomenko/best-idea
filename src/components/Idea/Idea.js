import { Card, Title, Head, Label } from 'components/Idea/Idea.styled';

export const Idea = ({ title, description, difficulty, images, id }) => {
  return (
    <Card>
      <Head>
        <Title>{title}</Title>
        <Label>{difficulty}</Label>
      </Head>
      <p>{description}</p>
    </Card>
  );
};
