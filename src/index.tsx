import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: "600px",
  height: ["250px", "170px"],
  layout: [1, 4],
  photos: [
    {
      source:
        "https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/486420681_10232270386335367_4427924382245322116_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OSlQqWtTTsQQ7kNvwGBfwO-&_nc_oc=Adl7z2kSqGUxri68qTzvqboCobqZBnHQpBXHaW45GZ9Y06g_heTUiPdMCGlCeJxEzoz1ocLqnMHkyQKvdqhbuJ5K&_nc_zt=23&_nc_ht=scontent.fmem1-2.fna&_nc_gid=mfZylw4eGtAofRHTK0dj7Q&oh=00_AfFKoEXwkOVMXAcdZqbuFVNfCbFLXYeGblOTpapjctFz_g&oe=67F788F6",
    },
    {
      source:
        "https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/485844663_10232270387255390_2593352069411163857_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KR7fK3dPRvsQ7kNvwFN-gel&_nc_oc=Adl47c8eCY0BrYsTeu3G4ta0yXXy8EJEr4Rm_c8aVquJ11TpQHFZgN_fp3QlYi2Ew9U7mO6jF7uAqPpsYXjsTKZq&_nc_zt=23&_nc_ht=scontent.fmem1-1.fna&_nc_gid=90PepNsZXi2l3OifzDRBiw&oh=00_AfFTEZ-KRmA6B_u5E2eKhkL8TgHOQvNwAGFhuUeCEVMKCw&oe=67F7679E",
    },
    {
      source:
        "https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/486020337_10232270384655325_1364475074883982771_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UUkBH0PRZ54Q7kNvwHaZYIV&_nc_oc=Adnsph6rMlMvO_G8sfcPDndS9lUSV68W0OdbXBaNj2phRVX4RqOduTOxGbQ8nJ_j8OpDsRYbbIAGIMEmESfkAg_Q&_nc_zt=23&_nc_ht=scontent.fmem1-2.fna&_nc_gid=_imLNNR-AeQVpEGQkqlZBw&oh=00_AfGi8xXeD86v82DkDSYJILXvyQhJX6hzs4ttfXO4WTwL4A&oe=67F78A28",
    },
    {
      source:
        "https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/486349620_10232270388095411_8171807059575003681_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DbKjo0SghfQQ7kNvwFb0h1c&_nc_oc=Admkx7FHI9XG52THd4sYRmqXUgrQiGtmi_jam6f9BkR0wRhLzfaCbVzKlV7oOW6nPVSm-RQc5bVotry9mAKzuycY&_nc_zt=23&_nc_ht=scontent.fmem1-2.fna&_nc_gid=-QLs0MY-MSvRwTzOfRQV2w&oh=00_AfH2dSYdSClHa308odpRlmwL45AFZm-u2SYaxKyUFoV4qA&oe=67F7912E",
    },
    {
      source:
        "https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/485863073_10232270389695451_6722723282110461103_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8fISMDkU8mcQ7kNvwF15Rsp&_nc_oc=Adnssvx5ir-VcM5uQRnQu40O9wHDozJ6ZAtekD-oAl3WYGVJhjH7bpwKnvzM0Dp1g9yiX-Mqu14RvQ0REG0bR5Bf&_nc_zt=23&_nc_ht=scontent.fmem1-1.fna&_nc_gid=zcHGzoyPcqIjdO1nY88BWw&oh=00_AfH5A7Vvh61fUx74R3J8_leBbaPk2JDGIaLVoXFBvQ07ZQ&oe=67F77DF0",
    },
    {
      source:
        "https://images.unsplash.com/photo-1526938972776-11558ad4de30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=973795a277e861265b0fabbf4a96afe2&auto=format&fit=crop&w=750&q=80",
    },
    {
      source:
        "https://images.unsplash.com/photo-1464550838636-1a3496df938b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f22dbf6c13ea7c21e803aa721437b691&auto=format&fit=crop&w=888&q=80",
    },
  ],
  showNumOfRemainingPhotos: true,
};

function App() {
  return <ReactPhotoCollage {...setting} />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
