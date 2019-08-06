import * as React from "react";

export interface ThingsProps {
    things: string[];
}

export interface Funnel {
    stage: string;
    action: string;
    data: any;
}
function analyse<PropType>() {
    return function (Component: React.ComponentType<PropType>) {
        return class extends React.Component<PropType> {
            onChange = (e:any) => {
                const target = e.target;
                const value = target.checked ? target.checked : target.value;
                this.setState({ value });
            };

            // handleClick = () => {
            //     console.log('this is:', this.  );
            // }

            handleClick(e: any) {
                console.log('this is ', e.target);
            }
            // change code below this line

            componentDidMount() {
                document.addEventListener('click', this.handleClick);
            }
            componentWillUnmount() {
                document.removeEventListener('click', this.handleClick);
            }

            render() {
                return (
                    <div >In extended:
                        <Component onClick={this.handleClick} {...this.props } />
                    </div>

                );
            }
        };
    }
}

export default analyse;
