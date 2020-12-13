import React, { Component } from 'react';
import './style.css';

interface IState {}

interface IProps {
   msg: string;
}

class ErrorToast extends Component<IState, IProps> {
   render() {
      const { msg } = this.props;
      return (
         <div className="errorToast">
            <div className="errorToast_text">{msg}</div>
         </div>
      );
   }

   componentDidMount() {
      this.timer = setTimeout(() => {
         this.props.clearError();
      }, 3000);
   }

   componentWillUnmount() {
      if (this.timer) {
         clearTimeout(this.timer);
      }
   }
}

export default ErrorToast;