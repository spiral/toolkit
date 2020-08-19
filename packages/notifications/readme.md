Development usage:

1. Include `notifications:toggle` from keeper package to header like so

```php
<div class="sf-header-user" data-sf="dropdown">
    <button class="sf-header-user__info" data-sf="dropdown-toggle" id="sf-header-user-menu" aria-haspopup="true"
            aria-expanded="false">
      <div class="sf-user-short-info">
        <span
          class="sf-user-short-info__avatar">{{ substr($_actor_->firstName, 0, 1) . substr($_actor_->lastName, 0, 1) }}</span>
        <span class="sf-user-short-info__name">{{ $_actor_->firstName . ' ' . $_actor_->lastName }}</span>
      </div>
    </button>
    <div class="sf-header-user__menu dropdown-menu" data-sf="dropdown-menu" aria-labelledby="sf-header-user-menu">
      <a class="dropdown-item" href="@action('profile.me')">Profile</a>
      <a class="dropdown-item" href="@route('auth:logout', ['token' => $_auth_->getToken()->getID()])">Log Out</a>
    </div>
  </div>
  <notifications:toggle>
      <script role="sf-options" type="application/json">
          {
              "api": {
                  "getList": "/keeper/testlist",
                  "setAsRead": "/keeper/markasread"
              }
          }
      </script>
  </notifications:toggle>
```

2. Include `notifications:drawer` to bottom of body layout

3. Implement 2 endpoints 

Getting notifications list. Default URL is `/api/notifications`.

Return object like so. Date should be JavaScript timestamp

Notes: 'read' should be `false` for item to be displayed, 'icon' is optional, if specified, a FontAwesome icon snippet will be prepended to title automatically.

```php
return [
            'status' => HttpStatus::OK,
            'unreadCount' => 4,
            'data' => [
                [
                    'title' => 'Report ready',
                    'body' => 'Click <a href="/keeper/me">here</a> to download',
                    'read' => false,
                    'icon' => 'download',
                    'date' => 1597828433980,
                    'id' => '1'
                ],
                [
                    'title' => 'Report ready',
                    'body' => 'Click <a href="/keeper/me">here</a> to download',
                    'read' => false,
                    'date' => 1597828233980,
                    'id' => '3'
                ],
                [
                    'title' => 'Report ready',
                    'body' => 'Click <a href="/keeper/me">here</a> to download',
                    'read' => false,
                    'date' => 1597828033980,
                    'id' => '4'
                ],
                [
                    'title' => 'Report ready',
                    'body' => 'Click <a href="/keeper/me">here</a> to download',
                    'read' => false,
                    'date' => 1597820033980,
                    'id' => '5'
                ],
            ]
        ];
```

Removing notification. Default URL is `/api/notifications/read` that will be used with POST request with 'id' as single or array of ids of notifications.

Response from removing notification is expected to match list response, i.e. to have actual notification list and unread counter



(Optional) Implement WS interface. WebSocket client accepts message with custom body. Configure in tag like so (see docs here     https://github.com/spiral/websocket-client#sfsocket-constructor-options )

```php
   <notifications:toggle>
      <script role="sf-options" type="application/json">
          {
              "ws": {
                "host": "some.domain.com",
                "port": "80",
                "path": "foo",
                "queryParams": { "bar": "1" }
              }
          }
      </script>
  </notifications:toggle>
```

Sending `message` event from server with `data` being a json string with payload like below will trigger adding it to notification center

```json
{
    "type": "notification",
    "data": {
        "id": "foo-1",
        "title": "Title",
        "body": "<a></a> html",
        "read": false,
        "date": 1224124324231
    }
}
```
