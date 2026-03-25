function saveAttachmentsToDrive() {

  var folder = DriveApp.getFolderById("YOUR_FOLDER_ID");

  var threads = GmailApp.search('has:attachment is:unread');

  threads.forEach(function(thread) {

    var messages = thread.getMessages();

    messages.forEach(function(message) {

      var attachments = message.getAttachments();

      attachments.forEach(function(file) {
        folder.createFile(file);
      });

      message.markRead();

    });

  });

}
