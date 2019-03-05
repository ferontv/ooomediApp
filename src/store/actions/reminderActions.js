export const createReminder = reminder => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("reminders")
      .add({
        ...reminder,
        // authorFirstName: profile.firstName,
        // authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_REMINDER_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_REMINDER_ERROR" }, err);
      });
  };
};
