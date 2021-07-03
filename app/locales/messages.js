export const messages = {
  // Login Screen
  login_title: 'Login',
  login_username_input_label: 'Username',
  login_password_input_label: 'Password',
  login_submit_button_text: 'Login',
  loader_title_message: 'Loading...',
  // Add Plan Screen
  addPlan_title_input_label: 'Title',
  addPlan_desc_input_label: 'Description',
  addPlan_target_date_input_label: 'Completed Date',
  addPlan_submit_button_text: 'Add Plan',
  cancel_button_text: 'Cancel',
  close_button_text: 'Close',
  addPlan_error_alert_title: 'Error',
  addPlan_error_alert_ok_button_label: 'Ok',
  // Plans
  plans_header_title: 'Tasks',
  plans_header_desc: 'add task to remind',
  plans_no_data_text: 'No tasks found!',
  plans_open_plan_button_label: 'Details',
  plans_update_plan_button_label: 'Update',
  plans_edit_plan_button_label: 'Edit',
  plans_delete_plan_button_label: 'Delete',
  plan_details_header_title: 'Task Details',
  plan_details_header_desc: 'see all task details',
  task_settings_header_title: 'Task Settings',
  task_settings_header_desc: 'settings for tasks',
  // Task Settings
  task_settings_apply_button_label: 'Apply',
  // Profile
  profile_edit_profile_button_label: 'Edit Profile',
  // Common
  session_timeout_text: 'Session expired',
};

export const successMessages = {
  // Defaults
  defaultForm: 'Success - Form Saved',

  // Member
  login: 'You are now logged in',
  signUp: 'You are now signed up. Please login to continue.',
  forgotPassword: 'Password reset. Please check your email.',
};

export const errorMessages = {
  // Defaults
  default: 'Hmm, an unknown error occured',
  timeout: 'Server Timed Out. Check your internet connection',
  invalidJson: 'Response returned is not valid JSON',
  missingData: 'Missing data',

  // Member
  memberNotAuthd: 'You need to be logged in, to update your profile',
  memberExists: 'Member already exists',
  missingFirstName: 'First name is missing',
  missingLastName: 'Last name is missing',
  missingEmail: 'Email is missing',
  missingPassword: 'Password is missing',
  passwordsDontMatch: 'Passwords do not match',

  // Articles
  articlesEmpty: 'No articles found',
  articles404: 'This article could not be found',
};
