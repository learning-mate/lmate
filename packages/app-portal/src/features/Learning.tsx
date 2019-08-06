import React from 'react';

interface D1Props {
  model: string;
}
class Learning extends React.Component<D1Props> {
  private model: string;
  constructor(props: D1Props) {
    super(props);
    this.model = props.model;
  }

  public render() {
    return (
      <div>
        <h1>Learning{this.model}</h1>
      </div>
    );
  }
}

export default Learning;
