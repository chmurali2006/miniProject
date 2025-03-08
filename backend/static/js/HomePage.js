function redirectToLogin(role) {
    if (!role) {
        console.error("Role is not provided!");
        return;
    }
    window.location.href = `/login/?role=${encodeURIComponent(role)}`;
}
