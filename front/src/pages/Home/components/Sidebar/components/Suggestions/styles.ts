import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: grey[100],
    borderRadius: 15,
  },
  rootTitle: {
    fontWeight: 900,
    fontSize: 19,
  },
  rootItem: {
    display: "flex",
    borderBottom: `1px solid ${grey[300]}`,
    "&:last-child": {
      borderBottom: "none",
    },
  },
  rootItemTitle: {
    fontWeight: 700,
    fontSize: 14,
  },
  rootAddBtn: {
    marginLeft: "auto",
  },
  rootItemUserNick: {
    color: grey[500],
  },
}));
