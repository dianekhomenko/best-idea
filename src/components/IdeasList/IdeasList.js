import { Idea } from 'components/Idea/Idea';
import { List } from 'components/IdeasList/IdeasList.styled';

export const IdeasList = ({ ideas }) => {
  return (
    <List>
      {ideas.map(idea => (
        <Idea
          key={idea.id}
          title={idea.title}
          difficulty={idea.difficulty}
          description={idea.description}
          images={idea.images}
        />
      ))}
    </List>
  );
};
