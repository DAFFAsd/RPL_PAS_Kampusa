import React from "react";

function Profile(props) {
  return (
    <svg
      className={props.className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="30"
      height="28"
      viewBox="0 0 30 28"
    >
      <path
        d="M15 14C19.1421 14 22.5 10.866 22.5 7C22.5 3.13401 19.1421 0 15 0C10.8579 0 7.5 3.13401 7.5 7C7.5 10.866 10.8579 14 15 14Z"
        fill={props.color}
      />
      <path
        d="M15 16.3333C12.0173 16.3364 9.15777 17.4436 7.0487 19.4121C4.93964 21.3805 3.75331 24.0495 3.75 26.8333C3.75 27.1427 3.8817 27.4394 4.11612 27.6582C4.35054 27.877 4.66848 28 5 28H25C25.3315 28 25.6495 27.877 25.8839 27.6582C26.1183 27.4394 26.25 27.1427 26.25 26.8333C26.2467 24.0495 25.0604 21.3805 22.9513 19.4121C20.8422 17.4436 17.9827 16.3364 15 16.3333Z"
        fill={props.color}
      />
    </svg>
  );
}

export default Profile;
