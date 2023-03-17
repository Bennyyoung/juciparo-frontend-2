export const formPages = [
 [
  { label: "First Name", type: "text", placeholder: "Enter Your First Name", name: "firstname" },
  { label: "Last Name", type: "text", placeholder: "Enter Your Last Name", name: "lastname" },
  { label: "Email", type: "text", placeholder: "Enter your email", name: "email" },
  { label: "Phone Number", type: "text", placeholder: "Enter your phone number" ,name: "phone" },
  { label: "Password", type: "password", placeholder: "Enter your Password", name: "password" }
 ],
 [
  { label: "Business Name", type: "text", placeholder: "Enter Your Store Name", name: "businessName" },
  {
   label: "State", type: "select", placeholder: "Select Your State", name: "state", options: [
    { label: "Abia", value: "Abia" },
    { label: "Adamawa", value: "Adamawa" },
    { label: "Akwa Ibom", value: "Akwa Ibom" },
    { label: "Anambra", value: "Anambra" },
    { label: "Bauchi", value: "Bauchi" },
    { label: "Bayelsa", value: "Bayelsa" },
    { label: "Benue", value: "Benue" },
    { label: "Borno", value: "Borno" },
    { label: "Cross River", value: "Cross River" },
    { label: "Delta", value: "Delta" },
    { label: "Ebonyi", value: "Ebonyi" },
    { label: "Edo", value: "Edo" },
    { label: "Ekiti", value: "Ekiti" },
    { label: "Enugu", value: "Enugu" },
    { label: "FCT - Abuja", value: "FCT - Abuja" },
    { label: "Gombe", value: "Gombe" },
    { label: "Imo", value: "Imo" },
    { label: "Jigawa", value: "Jigawa" },
    { label: "Kaduna", value: "Kaduna" },
    { label: "Kano", value: "Kano" },
    { label: "Katsina", value: "Katsina" },
    { label: "Kebbi", value: "Kebbi" },
    { label: "Kogi", value: "Kogi" },
    { label: "Kwara", value: "Kwara" },
    { label: "Lagos", value: "Lagos" },
    { label: "Nasarawa", value: "Nasarawa" },
    { label: "Niger", value: "Niger" },
    { label: "Ogun", value: "Ogun" },
    { label: "Ondo", value: "Ondo" },
    { label: "Osun", value: "Osun" },
    { label: "Oyo", value: "Oyo" },
    { label: "Plateau", value: "Plateau" },
    { label: "Rivers", value: "Rivers" },
    { label: "Sokoto", value: "Sokoto" },
    { label: "Taraba", value: "Taraba" },
    { label: "Yobe", value: "Yobe" },
    { label: "Zamfara", value: "Zamfara" },
   ]
  },
  { label: "Address", type: "text", placeholder: "Enter Your Address", name: "address" },
  {
   label: "How did you hear about us", placeholder: "Select an option", type: "select", name: "referral", options: [
    { label: "Friend", value: "friend" },
    { label: "Facebook", value: "facebook" },
    { label: "Advertisement", value: "advertisement" },
    { label: "Other", value: "other" },
   ]
  },
  {
   label: "Business Category", type: "text", placeholder: "Electronic, Mobile gadget etc.", name: "category"
  },
  {
   label: "City", type: "text", placeholder: "Please enter a City.", name: "city"
  },
  {
   label: "Subscription Grade", type: "select", placeholder: "Select an option", name: "subscription", options: [
    { label: "Regular", value: "regular" },
    { label: "Premium", value: "premium" },
    { label: "VIP", value: "vip" },
   ]
  },
  { label: "Add Your Profile Picture", type: "file", name: "image" },
 ]
]