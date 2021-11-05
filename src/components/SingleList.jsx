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

export default function SingleList({ items }) {
  return (
    <nav className="singleList">
      <List
        sx={{
          width: "100%",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
      >
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
