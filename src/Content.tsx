import { FC } from "react";

interface Props {
  name: string;
  eyeColor?: string;
}

const Content: FC<Props> = ({ name, eyeColor = 'black' }) => {
  return (
    <div>
      <p>
        This is {name}'s first component.
      </p>
      <p>
        {name}'s eye color is {eyeColor}.
      </p>
    </div>
  )
}

export default Content;