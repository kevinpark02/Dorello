if user.photo.attached? 
    json.extract! user, :id, :email
    json.photoUrl url_for(user.photo)
else
    json.extract! user, :id, :email
end