import React from "react";
import SecondaryGrid from "../../components/SecondaryGrid";

function Announcements({
  news,
  topStories,
  applications,
  header,
  all,
  showMoreButton,
}) {
  return (
    <div className="announcements">
      <SecondaryGrid>
        {header}
        <div className="announcements-grid">
          <div className="announcements-flex">
            {topStories}
            {applications}
          </div>
          {news}
          {all}
          {showMoreButton}
        </div>
      </SecondaryGrid>
    </div>
  );
}

export default Announcements;
