import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";

export default function LockList({ items }) {
  return (
    <nav className="singleList">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PeopleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={items.name} />
            <ListItemText
              primary={
                items.description ? `${items.description}` : "No description"
              }
            />
            <div className="listItemDoors">
              <SensorDoorOutlinedIcon />
              <span>{items.locksCount}</span>
            </div>
            <div className="listItemDoors">
              <PeopleOutlineIcon />
              <span>{items.membersCount}</span>
            </div>
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
    </nav>
  );
}
