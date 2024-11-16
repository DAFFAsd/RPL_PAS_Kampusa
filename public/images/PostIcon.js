import React from "react";

function PostIcon(props) {
  return (
    <svg
    className={props.className}
    style={props.style}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      
<path fill={props.color} d="M16,20H6c-3.3,0-6-2.7-6-6V4c0-0.6,0.4-1,1-1s1,0.4,1,1v10c0,2.2,1.8,4,4,4h10c0.6,0,1,0.4,1,1S16.6,20,16,20z"
	/>
<path fill={props.color} d="M18,0H6C4.9,0,4,0.9,4,2v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V2C20,0.9,19.1,0,18,0z M15,9h-2v2
	c0,0.6-0.4,1-1,1s-1-0.4-1-1V9H9C8.4,9,8,8.6,8,8s0.4-1,1-1h2V5c0-0.6,0.4-1,1-1s1,0.4,1,1v2h2c0.6,0,1,0.4,1,1S15.6,9,15,9z"/>
    </svg>
  );
}

export default PostIcon;
