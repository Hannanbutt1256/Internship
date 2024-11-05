interface HelloProps {
  name: string;
  country: string;
}
const Hello = (person: HelloProps) => {
  return (
    <div>
      Hello {person.name} from {person.country}
    </div>
  );
};

export default Hello;
