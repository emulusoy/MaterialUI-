import Badge from '@mui/material/Badge';
import ContactMailIcon from '@mui/icons-material/ContactMail';
function MUIBadges() {
  return (
    <div>
        <Badge badgeContent={41} color='primary' max={9}>
            <ContactMailIcon/>
        </Badge>
    </div>
  )
}

export default MUIBadges