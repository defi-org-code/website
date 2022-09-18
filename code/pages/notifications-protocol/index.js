import React from "react";

function NotificationsProtocol({
  hero,
  contribute,
  integrations,
  alerts,
  apps,
}) {
  return (
    <div className="notifications">
      {hero}
      {contribute}
      {integrations}
      {alerts}
      {apps}
    </div>
  );
}

export default NotificationsProtocol;
