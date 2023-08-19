import { useRouter } from "next/router";

function ProfileId() {
  const router = useRouter();
  const profileId = router.query.profileId;
  return <h1>Name {profileId}</h1>;
}

export default ProfileId;
