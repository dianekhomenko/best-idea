import { Idea } from 'components/Idea/Idea';
import { List } from 'components/IdeasList/IdeasList.styled';

export const IdeasList = ({ ideas, filter }) => {

  let listIdeas;
  if (filter.length === 0) {
    listIdeas = ideas;
  }
  else listIdeas = filter;

  return (
    <List>
      {listIdeas.map(idea => (
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
