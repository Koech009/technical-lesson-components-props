import React from "react";
function Links({github,linkdin}) {
  return (
    <div id="links">
		<a href={github}>{}github</a>
        <a href={linkdin}>{linkdin}</a>
    </div>
  );
}
export default Links;